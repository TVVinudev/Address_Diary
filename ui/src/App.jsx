import { useEffect, useState } from "react"
import FormData from "./components/form"
import Grid from "./components/grid"

function App() {
  const [data, setData] = useState([]);
  const ViewAll = async () => {

    try {

      const resp = await fetch('/api/view');
      console.log("resp:", resp);
      if (resp.status == 200) {
        const result = await resp.json();
        // console.log("data", result.data);
        setData(result.data);
        console.log("data",data);

      } else {
        console.log('error occure');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    ViewAll()
  }, [])

  return (
    <>

      <section className="h-auto w-full p-24 shadow-2xl mt-5">
        <FormData />

        <Grid datas={data} />

      </section>

    </>
  )
}

export default App
