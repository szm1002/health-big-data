import { Carousel } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class My extends React.Component {
    render() {
        const data = [
            {
                img: 'https://img.meituan.net/pay/815b14185ded5e0a1e2ed350de0ad087182865.jpg',
                link: '/'
            },
            {
                img: 'https://img.meituan.net/pay/c8fabae9589e2a15f26beb8c8c4e2307236062.jpg',
                link: '/chronic'
            },
            {
                img: 'https://img.meituan.net/pay/5dababd744232d1b8c5f239e438eca12217199.jpg',
                link: '/cancer'
            }
        ];
        return (
            <Carousel dots autoplay infinite selectedIndex={0} className="my-carousel" style={{ backgroundColor: 'blue', margin: 0 }}>
                {data.map((d, i) => {
                    return <Link to={d.link} key={i}><img style={{ verticalAlign: 'top' }} src={d.img} /></Link>;
                })}
            </Carousel>
        );
    }
}
