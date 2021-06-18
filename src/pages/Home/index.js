import React from 'react';
import './Home.scss'
import {Message} from "../../components/index";
import {Dialogs} from "../../components/index";

const Home = () => {
    return (
        <div className={'home'}>
            <div className="dialogs">

                <Dialogs dialogs={[
                    {
                        text: "Как дела чертила,давно не виделись?)",
                        isReaded: false,
                        created_at: "Fri Jun 11 2021 14:36:39",
                        user: {
                            _id: Math.random(),
                            fullname: "Федор Достоевский",
                            avatar: "https://pbs.twimg.com/profile_images/1322777266158448640/VoQwMdeA_400x400.jpg"
                        }
                    },
                    {
                        text: "Привет,как твои дела?)",
                        isReaded: false,
                        created_at: "Fri Jun 11 2021 14:36:39",
                        user: {
                            _id: Math.random(),
                            fullname: "Алан Тьюринг",
                            avatar: "https://b1.filmpro.ru/c/278960.700xp.jpg"
                        }
                    }
                ]}
                         userId={0}
                />
                {/*<Message*/}
                {/*    avatar={'https://sun9-41.userapi.com/impg/uYT1TNjBEPCrfd5UzGXiQtFUlv0FmJS0dgydOg/xxyw8iK0lF4.jpg?size=810x1080&quality=96&sign=94bb5d479c7d31af42c89f2dbbe53ecb&type=album'}*/}
                {/*    text={'Салам, Брут! Че, как, уничтожил флот галлов? '}*/}
                {/*    date="Wed Jun 09 2021 10:20:24"*/}
                {/*    attachments={[*/}
                {/*        {*/}
                {/*            filename: 'image.jpg',*/}
                {/*            url: 'https://source.unsplash.com/100x100/?random=1&nature,water'*/}
                {/*        },*/}
                {/*        {*/}
                {/*            filename: 'image.jpg',*/}
                {/*            url: 'https://source.unsplash.com/100x100/?random=2&nature,water'*/}
                {/*        },*/}
                {/*        {*/}
                {/*            filename: 'image.jpg',*/}
                {/*            url: 'https://source.unsplash.com/100x100/?random=3&nature,water'*/}
                {/*        }*/}
                {/*    ]}*/}
                {/*/>*/}
                {/*<Message*/}
                {/*    avatar={'https://sun9-41.userapi.com/impg/uYT1TNjBEPCrfd5UzGXiQtFUlv0FmJS0dgydOg/xxyw8iK0lF4.jpg?size=810x1080&quality=96&sign=94bb5d479c7d31af42c89f2dbbe53ecb&type=album'}*/}
                {/*    text={'Hello, World !'}*/}
                {/*    date="Wed Jun 09 2021 10:20:24"*/}
                {/*    isMe={true}*/}
                {/*    isReaded={false}*/}

                {/*/>*/}

                {/*<Message*/}
                {/*    avatar={'https://sun9-41.userapi.com/impg/uYT1TNjBEPCrfd5UzGXiQtFUlv0FmJS0dgydOg/xxyw8iK0lF4.jpg?size=810x1080&quality=96&sign=94bb5d479c7d31af42c89f2dbbe53ecb&type=album'}*/}
                {/*    attachments={[*/}
                {/*        {*/}
                {/*            filename: 'image.jpg',*/}
                {/*            url: 'https://source.unsplash.com/100x100/?random=1&nature,water'*/}
                {/*        }*/}
                {/*    ]}*/}
                {/*/>*/}
                {/*<Message*/}
                {/*    avatar={'https://sun9-41.userapi.com/impg/uYT1TNjBEPCrfd5UzGXiQtFUlv0FmJS0dgydOg/xxyw8iK0lF4.jpg?size=810x1080&quality=96&sign=94bb5d479c7d31af42c89f2dbbe53ecb&type=album'}*/}
                {/*    isTyping={true}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default Home;