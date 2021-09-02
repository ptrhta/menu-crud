import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PostsMainView } from './PostsMainView';
import { NewPost } from './NewPost';
import { EditPost } from './EditPost';
import { PostWithButtons } from './Buttons';
import { PostsProvider } from './PostsContext';
import './App.css';


function App() {

  return(
    <PostsProvider>
     <Router>
      <Switch>
        <Route path="/" exact component={PostsMainView} />
         <Route path="/posts/new" component={NewPost} />
         <Route path="/posts/:id" component={PostWithButtons} />
         <Route path="/posts/:id/edit" component={EditPost} />
       </Switch>
     </Router>
    </PostsProvider>
  )
};

export default App;
