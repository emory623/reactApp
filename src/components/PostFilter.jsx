import React from 'react';
import MySelect from './UI/Select/MySelect';
import MyInput from './UI/MyInput/MyInput'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput
          value = {filter.query}
          onChange = {e => setFilter({...filter, query: e.target.value})}
          placeholder='Поиск...'
        />
        <MySelect 
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})} 
          value={filter.sort} 
          defaultValue='Сортировка' 
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name:'По описанию'}
          ]}
        />
      </div>
    );
};

export default PostFilter;