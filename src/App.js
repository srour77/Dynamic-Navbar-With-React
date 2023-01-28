import './App.css'
import Header from './components/Header/Header.js'
import AddUrl from './components/AddUrl/AddUrl'
import {useState} from 'react'

function App(props) {
  let [urls, setUrls] = useState([])

  function addUrl(url, name){
    if(urls.length >= 10) return;
    setUrls([...urls, {url, name}])
  }

  function removeUrl(url, name){
    const index = urls.findIndex(function (item) {
      return item.name === name || item.url === url 
    })
    urls.splice(index, index+1);
    setUrls([...urls]);
  }

  return (
    <>
      <Header urls={urls}/>
      <AddUrl addUrl={addUrl} removeUrl={removeUrl}/>
    </>
  )
}

export default App