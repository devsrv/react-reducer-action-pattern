# React reducer-action pattern

cleaner state management for react without pulling any dependency

## 🌈 what is this?

> this is not a package, it is a micro implementation of the approach/ idea. you can think it of a clean alternative to useState for individual component's state management without needing to install any package.

Feel free to download the app & check the source to get the idea, in the project directory, run:

### 🌬 `yarn start`

##  🤖  how it works !

this approach uses react's useReducer hook and a custom HOC thats it.
the HOC wraps your component just like Redux does and you get `state` and `action` as props for that component

## ⌨️ how to use ?
- ✔ create `actionType` constants - [actionType.js](https://github.com/devsrv/react-reducer-action-pattern/blob/47dbb94d53d6dbae3b9f78ee05242857d6dc9ccf/src/components/posts/actions/actionType.js#L1)
- ✔ create `reducer` - [post.js](https://github.com/devsrv/react-reducer-action-pattern/blob/master/src/components/posts/reducer/Post.js)
- ✔ create `action.js` where you keep all the functions (_as object_) which are capable of dispatching to reducers (any extra works before dispatching also can be done here, __but dont forget to use `await` statements properly__ ) - [action.js](https://github.com/devsrv/react-reducer-action-pattern/blob/47dbb94d53d6dbae3b9f78ee05242857d6dc9ccf/src/components/posts/actions/action.js#L5)
- ✔ export your component using the `withAction` HOC - [PostsComponent.js](https://github.com/devsrv/react-reducer-action-pattern/blob/47dbb94d53d6dbae3b9f78ee05242857d6dc9ccf/src/components/posts/PostsComponent.js#L44)
- ✔ now you can get the state by using `props.state` [PostsComponent.js](https://github.com/devsrv/react-reducer-action-pattern/blob/47dbb94d53d6dbae3b9f78ee05242857d6dc9ccf/src/components/posts/PostsComponent.js#L20)
- ✔ apply any action by using `props.action.ACTION_PROPERTY_NAME` - [PostsComponent.js](https://github.com/devsrv/react-reducer-action-pattern/blob/47dbb94d53d6dbae3b9f78ee05242857d6dc9ccf/src/components/posts/PostsComponent.js#L16)

## 📑 IMPORTANT NOTES

##### 🚫 this approach is for state management of individual component not for entire app so don't think it as a replacement of Redux

##### 🚫 use this pattern when your component is using too many `useState`
 
##### 🚫 make seperate reducer & action for individual components and don't use any other component's reducer in a different component's export thinking that you'll get its state outside of the component ( this approach uses `useReducer` & that's how it works )

## 🎯 Tips
- only go for this approach when you think your component is using too many `useState`

- you can use `useContext` and apply the same idea of this approach __to achieve the state management for your entire app__ without needing to install any other package



