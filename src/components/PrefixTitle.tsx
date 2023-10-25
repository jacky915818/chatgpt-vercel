import type { JSXElement } from "solid-js"
import { Title } from "solid-start"

export default function (props: { children?: JSXElement }) {
  return <Title>一宝Ai{props.children ? " | " + props.children : ""}</Title>
}
