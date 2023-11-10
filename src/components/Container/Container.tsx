import styles from "./container.module.css"

interface Props{
  children:React.ReactNode;
  className?:string;
}

const Container = ({children,className}:Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container