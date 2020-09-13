import React,{Component} from "react"

class FormPost extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            body:''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(event){
      this.setState({[event.target.name]:event.target.value})
    }

    onSubmit(event){
        event.preventDefault();

        const post={
            title:this.state.title,
            body:this.state.body
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    render(){
        return(
            <div>
                <h1>Form Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                        <br />
                     </div>

                     <div>
                         <label>Body:</label><br />
                         <textarea name="body" onChange={this.onChange} value={this.state.body} />
                         <br />
                     </div>

                     <div>
                         <button type="submit">submit</button>
                         <br />
                     </div>

                </form>
            </div>
        )
    }
}
export default FormPost
