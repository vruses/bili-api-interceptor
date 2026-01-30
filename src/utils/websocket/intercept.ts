let isInterceptActive: boolean = false
let wsOriginalSend: ((this: WebSocket, data: string | ArrayBufferLike | Blob | ArrayBufferView) => void) | null = null

/** 修改ws连接成功后的发送的第一个数据包以在直播页获取弹幕 */
function toggleIntercept(): void {
  if (!isInterceptActive) {
    // 启动拦截
    wsOriginalSend = WebSocket.prototype.send
    isInterceptActive = true

    WebSocket.prototype.send = function (data: string | ArrayBufferLike | Blob | ArrayBufferView): unknown {
      if (data instanceof ArrayBuffer) {
        const view: DataView = new DataView(data)

        // 检查标识为7的数据包
        if (view.getUint32(8, false) === 7) {
          // 修改uid逻辑
          return wsOriginalSend!.call(this, modifyUidPacket(data))
        }
      }
      return wsOriginalSend!.call(this, data)
    }
  } else {
    // 停止拦截
    if (wsOriginalSend) {
      WebSocket.prototype.send = wsOriginalSend
    }
    isInterceptActive = false
    wsOriginalSend = null
  }
}

// uid修改
function modifyUidPacket(data: ArrayBuffer): ArrayBuffer {
  const newBuffer: ArrayBuffer = data.slice()
  const jsonStart: number = 16
  const jsonBytes: Uint8Array = new Uint8Array(newBuffer, jsonStart)

  const jsonString: string = new TextDecoder().decode(jsonBytes)
  const jsonObj: PacketData = JSON.parse(jsonString)

  jsonObj.uid = 0 // 修改uid

  const newJsonString: string = JSON.stringify(jsonObj)
  const newJsonBytes: Uint8Array = new TextEncoder().encode(newJsonString)

  const newPacket: ArrayBuffer = new ArrayBuffer(16 + newJsonBytes.length)
  const newView: DataView = new DataView(newPacket)

  // 复制包头并更新长度
  const originalView: DataView = new DataView(data)
  for (let i: number = 0; i < 16; i++) {
    newView.setUint8(i, originalView.getUint8(i))
  }
  newView.setUint32(0, newJsonBytes.length + 16, false)

  new Uint8Array(newPacket, 16).set(newJsonBytes)
  return newPacket
}

interface PacketData {
  uid: number
  roomid: number
  protover: number
  buvid: string
  support_ack: boolean
  queue_uuid: string
  scene: string
  platform: string
  type: number
  key: string
}

export default toggleIntercept
