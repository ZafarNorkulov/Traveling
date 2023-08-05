
import { ReactNode } from "react";

type PropsInformerFieldSetUi = {
    title: string,
    text?: string | ReactNode
}

 const CCFieldSetUi =({ title, text }: PropsInformerFieldSetUi) =>{



    return (
        <fieldset className="field_set_box">
            <legend style={{ width: "auto", fontSize: "12px" }}>{title}</legend>
            <span> {text ?? '-'}  </span>
        </fieldset>
    )

}
export default CCFieldSetUi