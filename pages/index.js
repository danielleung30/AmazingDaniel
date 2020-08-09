import NavBar from "../components/NavBar/NabBar"
import Carousel from "../components/Carousel/Carousel"
import Horizontal_showcase from "../components/Horizontal_showcase/Hori_Showcase"
import Vertical_showcase from "../components/Vertical_Showcase/Vertical_Showcase"
import Block_showcase from "../components/Block_Showcase/Block_showcase"
import Head from "next/head"

const blocks_upper= [
  {
      img_link:"./image/concepts-02.png",
      title:"學習電腦相關的知識",
      text:"教授孩子不同類型的電腦知識，讓小朋友更加認識週遭的世界。"

  },
  {
      img_link:"./image/concepts-03.png",
      title:"掌握60個程式設計概念",
      text:"每星期課堂學習一個程式設計概念，60週後成為電腦小博士！"

  },
  {
      img_link:"./image/concepts-04.png",
      title:"提升網上學習能力",
      text:"教授孩子如何善用互聯網資源，自己解決問題及學會持續學習。"

  }
]

const blocks_bottom= [
  {
      img_link:"./image/tool-1.jpg"
  },
  {
    img_link:"./image/tool-2.jpg"
  },
  {
    img_link:"./image/tool-3.jpg"
  },
  {
    img_link:"./image/tool-4.jpg"
  },
  {
    img_link:"./image/tool-5.jpg"
  },
  {
    img_link:"./image/tool-6.jpg"
  },
        

  
]

const Index = (props) => {
  return (
    <div className="app">
      <Head>
        <title>Amazing Daniel</title>
      </Head>
      <main className="main">
        <NavBar />
        <Carousel />
        <Horizontal_showcase 
          direction={"l_to_r"}
          img_link={"./images.jpeg"}
          title={"不只是興趣班，而是一生受用的課程"}
          color={'#333'}
          text={"我們提供香港絕無僅有「程式設計常規課程」，而非一般的「短期興趣課程」，因為我們並不視程式設計為一門興趣，而是每個小朋友都應該擁有的能力。未來將是一個科技主導的世界，從事不同工作也總離不開電腦。我們課程所教授的知識，將會是一生受用的知識。"} />
          <div style={{backgroundColor:"#530275",paddingTop:'40px',paddingBottom:'40px'}}>
          <Vertical_showcase
          direction={"b_to_t"}
          line={true}
          bgColor={"#fff"}
          color={'#fff'}
          img_link={"./images.jpeg"}
          title={"重視程式設計概念，幫助孩子打好基礎"}
          text={"世界每天在變，要追上科技發展的步屐，幾乎是不可能的任務。為了讓小孩子更能適應每天在變的社會，我們的課程十分重視程式設計概念，透過生活化的教學方式，幫助小朋友掌握最基礎的程式設計概念，迎接世界瞬息萬變的挑戰。就好像練好一副強健體魄，無論日後參與任何運動，都會有更優秀的表現。"} />
          </div>

          <Block_showcase blocks={blocks_upper} direction={"t_to_b"} bgColor={"#333"} title={"課程教授3類型內容"} line={true} backgroundColor={'#333'}/>

          <Block_showcase  blocks={blocks_bottom} direction={"t_to_b"} bgColor={"#333"} title={"透過一系列工具，實踐不同編程概念"} line={true} backgroundColor={'#333'}/>
      </main>
    </div>
  )
}

export default Index;