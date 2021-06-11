import React from 'react';
import './Home.scss'
import {Message} from "../../components/index";

const Home = () => {
    return (
        <div className={'home'}>
            <Message
                avatar={'https://sun9-41.userapi.com/impg/uYT1TNjBEPCrfd5UzGXiQtFUlv0FmJS0dgydOg/xxyw8iK0lF4.jpg?size=810x1080&quality=96&sign=94bb5d479c7d31af42c89f2dbbe53ecb&type=album'}
                text={'Салам, Брут! Че, как, уничтожил флот галлов? '}
                date="Wed Jun 09 2021 10:20:24"
                attachments={[
                    {
                        filename:'image.jpg',
                        url:'https://source.unsplash.com/100x100/?random=1&nature,water'
                    },
                    {
                        filename:'image.jpg',
                        url:'https://source.unsplash.com/100x100/?random=2&nature,water'
                    },
                    {
                        filename:'image.jpg',
                        url:'https://source.unsplash.com/100x100/?random=3&nature,water'
                    }
                ]}
            />
            <Message
                avatar={'https://sun9-41.userapi.com/impg/uYT1TNjBEPCrfd5UzGXiQtFUlv0FmJS0dgydOg/xxyw8iK0lF4.jpg?size=810x1080&quality=96&sign=94bb5d479c7d31af42c89f2dbbe53ecb&type=album'}
                text={'Hello, World !'}
                date="Wed Jun 09 2021 10:20:24"
                isMe={true}
                isReaded={false}

            />
        </div>
    );
};

export default Home;