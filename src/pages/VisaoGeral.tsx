import { Header } from "../components/Header";
import { Body } from "../components/Body";

import './VisaoGeral.css'

export function VisaoGeral() {
  return (
    <div className="aplication">
      <Header amountTotal={0} amountOpen={0} />
      <Body />
    </div>
  )
}