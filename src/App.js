import React, { Component, Fragment } from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { Cards } from './components/Cards/Cards';
import { Popup } from './components/Popup/Popup';
import { Form } from './components/Form/Form';

import { Communicators } from './Communicators';

class App extends Component {
    //1
    constructor(props) {
        super(props);
    }

    state = {
        header: true,
        data: [],
        filteredData: [],
        popupOpened: false,
        formData: null
    }

    componentDidMount() {
        this.fetchData();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.data.length !== this.state.data.length) {
    //         this.setState({
    //             filteredData: this.state.data
    //         })
    //     }
    // }

    formatData(responseData) {
        const data = [];

        for (const item in responseData) {
            data.push({
                ...responseData[item],
                id: item
            });
        }
        return data;
    }

    filterData(searchResults) {
        console.log(searchResults)
        this.setState({
            filteredData: searchResults
        })
    }

    onPopupOpened = () => {
        this.setState({
            popupOpened: true
        })
    }

    onPopupClose = () => {
        this.setState({
            popupOpened: false
        })
    }

    fetchData = () => {
        Communicators.Fetch()
            .then(responseData => {
                this.setState({
                    filteredData: this.formatData(responseData)
                })
            })
    }

    onCardAdd = (data) => {
        Communicators.Post(data)
            .then(() => {
                Communicators.Fetch()
                    .then(responseData => {
                        this.setState({
                            popupOpened: false,
                            filteredData: this.formatData(responseData)
                        })
                    })
            })
    }

    onCardDelete = (cardId) => {
        Communicators.Delete(cardId)
            .then(() => this.fetchData())
    }

    onCardEdit = (cardId) => {
        const forEditing = [...this.state.filteredData].find(item => item.id === cardId);
        console.log(forEditing);
        this.setState({
            popupOpened: true,
            formData: forEditing
        })
    }

    onFormEdit = (data) => {
        const updatedData = {
            name: data.name,
            lastName: data.lastName,
            age: data.age
        }

        Communicators.Put(data.id, updatedData)
            .then(() => this.fetchData())
    }

    render() {
        const { header, data, filteredData, popupOpened, formData } = this.state;
        return (
            <Fragment>
                <Header black
                    search
                    onPrint={(text) => this.printSomething(text)}
                    data={data}
                    onDataFilter={searchResults => this.filterData(searchResults)} />

                <Cards data={filteredData}
                    openForm={() => this.onPopupOpened()}
                    onCardDelete={cardId => this.onCardDelete(cardId)}
                    onCardEdit={cardId => this.onCardEdit(cardId)} />

                {popupOpened && (
                    <Popup popupClose={() => this.onPopupClose()} title="Add person">
                        <Form onFormSubmit={data => this.onCardAdd(data)}
                            formData={formData}
                            onFormEdit={this.onFormEdit} />
                    </Popup>
                )}
            </Fragment>
        )
    }
}

export default App;