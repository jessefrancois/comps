import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from '../components/Button'

function ButtonPage() {
  const handleClick = ()=> {
    console.log("Clicked!")
  }
  return(
    <div>
      <div>
        <Button className="mb-5" onClick={handleClick} primary rounded outline>
          <GoBell />
          Click Me!
        </Button></div>
      <div>
        <Button className="mb-5" secondary>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button className="mb-5" success outline>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div><Button className="mb-5" warning outline>Hide Ads!</Button></div>
      <div><Button danger rounded>Something!</Button></div>
    </div>
    
  )
}

export default ButtonPage;