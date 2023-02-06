import { useRef, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CarouselItem {
    color: string;
    txt: string
}

// need to change the circle to blue when it is ont the current screen

const CircleIcon = <Icon name="circle" size={30} color="#900" />;


function CarouselComp() {
    const carouselRef = useRef()
    const width = Dimensions.get('window').width;
    const _carouselItems = [{ color: "rgb(6, 20, 146)", txt: "hello", isOnUI: true }, { color: "rgb(233, 192, 233)", txt: "hi", isOnUI: false }, { color: "rgb(80, 34, 116)", txt: "sup", isOnUI: false }]
    const [carouselItems, setCarouselItems] = useState(_carouselItems)

    return (
        <View style={{ flex: 1, height: "70%", width: "100%", position: 'relative' }}>
            <Carousel
                loop
                width={width}
                style={{ height: "100%" }}
                data={carouselItems}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                ref={carouselRef.current}
                renderItem={({ item, index }) => {
                    const { color, txt } = item;

                    return (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                display: 'flex',
                                paddingTop: "100px",
                                backgroundColor: color
                            }}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 30, color: "white" }}>
                                {txt}
                            </Text>
                        </View>
                    )
                }}
            />
            <View style={{ position: 'absolute', bottom: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: width, flexDirection: 'row' }}>
                {carouselItems.map(({ isOnUI }, index) => isOnUI ?
                    <Icon
                        name="circle"
                        size={30}
                        color="#93deff"
                        style={{ marginEnd: index === 1 ? "15px" : "", marginLeft: index === 1 ? "15px" : "" }} />
                    :
                    <Icon
                        name="circle"
                        size={30}
                        color="#f2f2f2"
                        style={{ marginEnd: index === 1 ? "15px" : "", marginLeft: index === 1 ? "15px" : "" }}
                    />
                )}
            </View>
        </View>
    );
}

export default CarouselComp;