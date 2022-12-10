import React from "react"

type SamplePageProps = {
  message: string
}

export const SamplePage3: React.FC<SamplePageProps> = (props) => {
  const { message } = props
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}
