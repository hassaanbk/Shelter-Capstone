import { View, Text, StyleSheet, FlatList } from 'react-native'
import Widget from '../components/Widget'


const data = [
    {
        id:1,
        name: "Shelter 1"
    },
    {
        id: 2,
        name: "Shelter 2"
    }

]


export default function Dashboard() {
    const renderItem = ({item}) => <Widget shelter={item} />
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Dashboard</Text>
            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={renderItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    headerText: {
        paddingTop: 50,
        fontSize: 40
    }
})
