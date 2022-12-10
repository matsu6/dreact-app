import React, { memo } from "react"

type ChildAreaProps = {
  isOpen: boolean
  onClickClose: VoidFunction
}

const style = {
  width: "100",
  height: "200px",
  backgroundColor: "khaki",
}

export const ChildArea: React.FC<ChildAreaProps> = memo((props) => {
  const { isOpen, onClickClose } = props
  //重い処理
  const data = [...Array(2000).keys()]
  data.forEach(() => {
    console.log("...")
  })

  return (
    <>
      {isOpen ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>子非表示</button>
        </div>
      ) : null}
    </>
  )
})

export default ChildArea
