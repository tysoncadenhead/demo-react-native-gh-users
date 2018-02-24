import * as React from 'react';

import { ScrollView, Text, View } from 'react-native';

import Loading from '../components/Loading';
import Repo from '../components/Repo';
import UserBadge from '../components/User';
import fetchRepos from '../api/fetchRepos';
import fetchUser from '../api/fetchUser';

class User extends React.Component {

    constructor (props) {
        super(props);
        
        this.state = {
            isLoading: true,
            user: null,
            repos: null
        };
    }

    componentDidMount () {
        const { login } = this.props.navigation.state.params;
        Promise.all([
            fetchUser(login)
                .then(user => 
                    this.setState({
                        user
                    })
                ),
            fetchRepos(login)
            .then(repos => 
                this.setState({
                    repos
                })
            )
        ]).then(() => {
            this.setState({
                isLoading: false
            });
        });

    }

    render () {
        return (!this.state.isLoading) ? (
            <ScrollView>
                <UserBadge {...this.state.user} />
                {this.state.repos.map(repo => (
                    <Repo key={repo.id} {...repo} />
                ))}
            </ScrollView>
        ) : (
            <Loading />
        );
    }

}

export default User;