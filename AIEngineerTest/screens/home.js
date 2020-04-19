import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"

import SearchBar from "../components/searchbar"

import { connect } from "react-redux"
import { fetchPosts } from "../redux/actions/add-posts"

class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            searchText: "",
            searchEnable: false,
            filteredPosts: [],
            page: 0,

        }
    }

    static getDerivedStateFromProps(nextProps, state) {
        return {
            posts : nextProps.postsList.posts,
            page: nextProps.postsList.pageNo
        }
    }

    componentDidMount() {
        this.props.fetchingPosts(0)
        this.interval = setInterval(() => {
             this.props.fetchingPosts(this.state.posts.pageNo)
        }, 10000)
    }

    paginationAction = () => {
        this.props.fetchingPosts(this.state.posts.pageNo)
    }

    serchAction = () => {
        console.log("search action")

        if( this.state.posts.length == 0 && this.state.searchText == "") {
            this.setState({ searchEnable : false, })
            return
        }

        const postsInfo = this.state.posts.filter( item => {
            if (item.title && item.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1 || 
                item.author && item.author.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1 || 
                item.url && item.url.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1){
                return item
            } 
        })

        this.setState({ filteredPosts : postsInfo, searchEnable : true})
    }

    filterAction = () => {
        console.log("filter action")

        if( this.state.posts.length == 0 && this.state.searchText == "") {
            this.setState({ searchEnable : false, })
            return
        }

        const postsInfo = this.state.posts.filter( item => {
            if (item.title && item.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1 || 
                item.created_at && item.created_at.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1 ){
                return item
            } 
        })

        this.setState({ filteredPosts : postsInfo, searchEnable : true})
    }

    onSearchTextChange = (text) => {
        console.log("Text is " + text)        
       
        if( text == "") {
            this.setState({ searchEnable : false, })
        }
        this.setState({searchText : text})
    }

    moveToDetailPage = (item) => {
        console.log("Detail page action"+ JSON.stringify(item))
        this.props.navigation.navigate("Details", { data : item})
    }

    render() {
        return (
            <View style={homeStyles.container}>
                <SearchBar onSearchTextChange={(text) => this.onSearchTextChange(text)} searchAction={this.serchAction} filterAction={this.filterAction} />
                <FlatList
                    data={ this.state.searchEnable ? this.state.filteredPosts : this.state.posts}
                    renderItem={({ item }) => (<PostCell item={item} detailPageAction = {(item) => this.moveToDetailPage(item)}/>)}
                    keyExtractor={item => item.id}
                    onEndReached={this.paginationAction}
                    onEndReachedThreshold={0}
                    ItemSeparatorComponent={() => (<View style={{ width: "100%", height: 1, backgroundColor: "gray" }} />)}
                />

            </View>
        )
    }
}

const PostCell = (props) => {
    return (
        <TouchableOpacity style={homeStyles.postCell} onPress = {() => props.detailPageAction(props.item)}>
            <Text />
            <Text style = {homeStyles.titleText}> {props.item.title} </Text>
            <Text />
            <Text style = {homeStyles.subTitle}> Created At <Text style = {homeStyles.subText}> {props.item.created_at} </Text> </Text> 
            <Text />
            <Text style = {homeStyles.subTitle}> Author <Text style = {homeStyles.subText}> {props.item.author} </Text> </Text>
            <Text />
            <Text style = {homeStyles.subTitle}>  URL <Text style = {homeStyles.subText}> {props.item.url} </Text> </Text>
            <Text />
        </TouchableOpacity>
    )
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postCell: {
        height: 200,
    },
    titleText : {
        fontSize : 16,
        fontWeight : "bold"
    },
    subTitle: {
        fontSize : 15,
        fontWeight : "bold"
    }, 
    subText: {
        fontSize : 15,
        fontWeight : "normal"
    }
})


const mapStateToProps = (state) => {
    console.log("Updated State is "+ JSON.stringify(state))
    return {
        postsList: state.posts,
        pageNumber: state.posts.pageNo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchingPosts: (pageNo) => {
            dispatch(fetchPosts(pageNo))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(HomeScreen);