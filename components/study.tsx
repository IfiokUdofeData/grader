type DocumentData = {
    id: number;
    imageUrl: string | { uri: string }; 
    iconType: string;
    name: string;
    date: string;
    number: number;
};

type ItemType = {
    item: DocumentData | null;
    index: number
}

const checkIcon = (icontype: string)=>{
    if (icontype === "scan") {
        return icons.image
    } else if(icontype === "report"){
        return icons.wordfile
    } else if(icontype === "result"){
        return icons.sheet
    } else if(icontype === "grader"){
        return icons.grid
    }
     else {
        return icons.wordfile
    }
}


const RenderItem = (item: DocumentData ) => {
  return (
            <View className='relative'>
                <Image
                    source={item.imageUrl ? item.imageUrl: require("../assets/icons/bookmark.png")}
                    className='h-16 w-16 opacity-80 rounded'
                />

                <Image
                    source={item.iconType? item.iconType => checkIcon(item.iconType) : icons.wordfile}
                    className='h-7 w-7 opacity-90 text-primary mt-4 absolute bottom-8 left-1'
                />
            </View>
  )
}