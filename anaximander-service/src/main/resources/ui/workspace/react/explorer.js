var workspaceJson = [{
    "description": "The Kernel Ontology for Ultrastructure [Ain Soph Ur]",
    "id": "00000000-0000-0004-0000-000000000003",
    "name": "Ultrastructure Kernel Workspace"
}, {
    "description": "Task Manager",
    "id": "20f06ce2-b382-5e98-ae7c-77025e39f31b",
    "name": "Steward"
}];

var Facet = React.createClass({
    render: function () {
        return (
            <div className="facet">
                Facet
            </div>
        );
    }
});

var FacetBox = React.createClass({
    render: function () {
        return (
            <div className="facetBox">
                Facet Box
                <Facet />
            </div>
        );
    }
});

var Workspace = React.createClass({
    render: function () {
        return (
            <div className="workspace">
                Workspace
                <FacetBox />
            </div>
        );
    }
});


var WorkspaceBox = React.createClass({
    render: function () {
        return (
            <div className="workspaceBox">
                Workspace Box
                <Workspace />
            </div>
        );
    }
});

var WorkspaceItem = React.createClass({
    render: function () {
        return (
            <div className="workspaceItem">
                Id: {this.props.workspace.id} <br/>
                Name: {this.props.workspace.name} <br/>
                Desc: {this.props.workspace.description} <br/>
            </div>
        );
    }
});

var workspaceListStyle = {
    float: 'left',
    width: '300',
    paddingRight: '50'
}
var WorkspaceList = React.createClass({
    render: function () {
        var rows = [];
        this.props.workspaces.forEach(function (ws) {
            rows.push(<WorkspaceItem workspace={ws} key={ws.id}/>);
        });
        return (
            <div className="workspaceList" style={workspaceListStyle}>
                Workspace List
                {rows}
            </div>
        );
    }
});


var AppContainer = React.createClass({
    render: function () {
        return (
            <div className="appContainer">
                Workspace Explorer
                <WorkspaceList workspaces={workspaceJson}/>
                <WorkspaceBox />
            </div>
        );
    }
});

React.render(
    <AppContainer />,
    document.getElementById('content')
);