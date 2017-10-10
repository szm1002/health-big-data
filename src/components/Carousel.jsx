import { Carousel } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class My extends React.Component {
    render() {
        const data = [
            {
                img: 'https://ooo.0o0.ooo/2017/06/15/59428f331f9ce.png',
                link: '/'
            },
            {
                img: 'https://ooo.0o0.ooo/2017/06/15/594290266efdf.jpg',
                link: '/chronic'
            },
            {
                img: 'https://ooo.0o0.ooo/2017/06/15/59429043a6c00.jpg',
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
