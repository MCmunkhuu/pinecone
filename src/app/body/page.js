import styles from "../edit/edit.module.css"
export default function Bigdiv()
{
    return(
        <div>
            <Divs></Divs>
            <Divs1></Divs1>
        </div>
    )
}
function Divs() {
    return (
        <div className={styles.color}>

        <div className={styles.flex}>
            <input className={styles.input}></input>
            <h2 className={styles.list}>My todo list#1</h2>
            <img className={styles.img} src="./images.png"></img>
            <img className={styles.img} src="./trash.png"></img>
        </div>
        <input type="serch"
        id="input"
        placeholder="whaw's next?"
        className={styles.golInput}></input>
        </div>
    )
}
function Divs1() {
    return(
        <button className={styles.buttons}>Add task</button>
    )
}