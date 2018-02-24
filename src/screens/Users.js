import { ScrollView, TouchableOpacity, View } from 'react-native';

import Loading from '../components/Loading';
import NoResults from '../components/NoResults';
import React from 'react';
import SearchField from '../components/SearchField';
import User from '../components/User';
import debounce from 'lodash.debounce';
import fetchUsers from '../api/fetchUsers';

class Users extends React.Component {

    constructor (props) {
        super(props);

        this.setSearch = this.setSearch.bind(this);
        this.getUsersForSearchDebounced = debounce(this.getUsersForSearch, 500);
        
        this.state = {
            isLoading: true,
            search: '',
            users: []
        };
    }

    static navigationOptions = {
        title: 'GitHub Users'
    };    

    componentDidMount () {
        this.getUsersForSearch(this.state.searchValue);
    }

    getUsersForSearch (searchValue) {
        fetchUsers(searchValue)
            .then(users => {
                this.setState({
                    isLoading: false,
                    users
                });
            });
    }

    setSearch (searchValue) {
        this.setState({
            searchValue
        });

        this.getUsersForSearchDebounced(searchValue);
    }

    render () {
        return (!this.state.isLoading) ? (
            <View>
                <SearchField 
                    placeholder='Search'
                    value={this.state.searchValue}
                    onChangeText={this.setSearch}
                />
                <ScrollView>
                    {!this.state.users.length && (
                        <NoResults />
                    )}
                    {this.state.users.map(user => (
                        <TouchableOpacity key={user.id} onPress={() => this.props.navigation.navigate('User', {
                            login: user.login
                        })}>
                            <User 
                                {...user}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        ) : (
            <Loading />
        );
    }

}

export default Users;