import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";


class SongList extends Component {
    renderList() {
        const listSongsRendered = this.props.songs.map(song => (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button
                        onClick={() => this.props.selectSong(song)}
                        className="ui button primary"
                    >
                        Select
                    </button>
                </div>
                <div className="content">
                    {song.title}
                </div>
            </div>
        ));

        return listSongsRendered;
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    songs: state.songs,
});

const mapDispatchToProps = {
    selectSong,
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
