import { Carousel } from 'antd-mobile';

export default class My extends React.Component {
  render() {
    const data = [
      {
        img: 'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
        link: '/'
      },
      {
        img: 'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
        link: '/chronic'
      },
      {
        img: 'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
        link: '/cancer'
      }
    ];
    return (
      <Carousel dots autoplay infinite selectedIndex={0} className="my-carousel" style={{ backgroundColor: 'blue', margin: 0 }}>
        {data.map((d, i) => {
          return <a href={d.link} key={i}><img style={{ verticalAlign: 'top' }} src={d.img}/></a>;
        })}
      </Carousel>
    );
  }
}
