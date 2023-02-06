import { RefObject, useRef, useState } from 'react';
import { Dimensions, Text, View, Pressable } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

    
    



function CarouselComp() {
    const carouselRef = useRef<ICarouselInstance | undefined>() as RefObject<ICarouselInstance>
    const width = Dimensions.get('window').width;
    const _carouselItems = [{ color: "rgb(6, 20, 146)", txt: "hello", isOnUI: true }, { color: "rgb(233, 192, 233)", txt: "hi", isOnUI: false }, { color: "rgb(80, 34, 116)", txt: "sup", isOnUI: false }]
    const [carouselItems, setCarouselItems] = useState(_carouselItems)

    function handlePressIcon(nextCircleIndex: number) {
        setCarouselItems(carouselItems => carouselItems.map((carouselItem, _index) => {
            if (nextCircleIndex === _index) {
                return { ...carouselItem, isOnUI: true }
            }

            return { ...carouselItem, isOnUI: false }
        }))

        const isUserOnFirstPic = carouselRef.current?.getCurrentIndex() === 0
        const isUserOnSecondPic = carouselRef.current?.getCurrentIndex() === 1
        const isUserOnThirdPic = carouselRef.current?.getCurrentIndex() === 2

        if(((nextCircleIndex === 1) && isUserOnFirstPic) || ((nextCircleIndex === 2) && isUserOnSecondPic)){
            carouselRef.current?.scrollTo({ count: 1, animated: true })
            return;
        }

        
        if((nextCircleIndex === 2) && (isUserOnFirstPic)){
            carouselRef.current?.scrollTo({ count: 2, animated: true })
            return;
        }

        if(((nextCircleIndex === 0) && isUserOnSecondPic) || ((nextCircleIndex === 1) && isUserOnThirdPic)){
            carouselRef.current?.scrollTo({ count: -1, animated: true })
            return;
        }

        carouselRef.current?.scrollTo({ count: -2, animated: true })
    }

    return (
        <View style={{ flex: 1, height: "70%", width: "100%", position: 'relative' }}>
            <Carousel
                loop
                autoPlay={false}
                width={width}
                style={{ height: "100%", width: "100% !important"}}
                data={carouselItems}
                scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                ref={carouselRef}
                renderItem={({ item, index }) => {
                    const { color, txt } = item;

                    return (
                        <View
                            key={index}
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
                        key={index}
                        name="circle"
                        size={30}
                        color="#93deff"
                        style={{ marginEnd: index === 1 ? "15px" : "", marginLeft: index === 1 ? "15px" : "", zIndex: 100 }} />
                    :
                    <Pressable onPress={() =>{ handlePressIcon(index) }}>
                        <Icon
                            key={index}
                            name="circle"
                            size={30}
                            color="#f2f2f2"
                            onPress={() =>{ handlePressIcon(index) }}
                            style={{ marginEnd: index === 1 ? "15px" : "", marginLeft: index === 1 ? "15px" : "", zIndex: 100 }}
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
}

export default CarouselComp;