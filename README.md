# React reducer-action pattern

cleaner state management for react without pulling any dependency

## 🌈 what is this?

> this is not a package, it is a micro implementation of the approach/ idea. you can think it of a clean alternative for individual component's state management without needing to install any package.

Feel free to download the app & check the source to get the idea, in the project directory, run:

### 🌬 `yarn start`

##  🤖  how it works !

this approach uses react's useReducer hook and a custom HOC thats it.
the HOC wraps your component just like Redux does and you get `state` and `action` as props for that component

## ⌨️ how to use ?
- ✔ create `actionType` constants - 
- ✔ create `reducer`
- ✔ create `action.js` where you keep all the functions (_as object_) which are capable of dispatching to reducers (any extra works before dispatching also can be done here, __but dont forget to use `await` statements properpy__ )
- ✔ export your component using the `withAction` HOC
- ✔ now you can get the state by using `props.state`
- ✔ apply any action by using `props.action.ACTION_PROPERTY_NAME`

## 📑 IMPORTANT NOTES

##### 🚫 this approach is for state management of individual component not for entire app so don't think it as a replacement of Redux

##### 🚫 use this pattern when your component is using too many `useState`
 
##### 🚫 make seperate reducer & action for individual components and don't use any other component's reducer in a different component's export thinking that you'll get its state outside of the component ( this approach uses `useReducer` & that's how it works )

## 🎯 Tips
- only go for this approach when you think your component is using too many `useState`

- you can use `useContext` and apply the same idea of this approach __to achieve the state management for your entire app__ without needing to install any other package



