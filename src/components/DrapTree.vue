<template>
	<vue-drag-tree :data='data' :allowDrag='allowDrag' :allowDrop='allowDrop' :defaultText='"新节点"' @current-clicked='curNodeClicked' @drag="dragHandler" @drag-enter="dragEnterHandler" @drag-leave="dragLeaveHandler" @drag-over="dragOverHandler" @drag-end="dragEndHandler" @drop="dropHandler">
    </vue-drag-tree>
</template>
<script>
export default{
  data(){
    return{
      data: [
        {
          name: 'Node 0-0',
          id: 0,
          children: [
            {
              name: 'Node 1-1',
              id: 3,
              children: [
                {
                  name: 'Node 2-1',
                  id: 4,
                  children: []
                },
                {
                  name: 'Node 2-2',
                  id: 10,
                  children: []
                }
              ]
            },
            {
              name: 'Node 1-2',
              id: 13,
              children: []
            }
          ]
        },
        {
          name: 'Node 0-1',
          id: 14,
          children: []
        }
      ]
    }
  },
  methods: {
   	allowDrag(model, component) {
      if (model.name === 'Node 0-1') {
        // 不允许拖拽
        return false;
      }
      // 允许拖拽
      return true;
    },
    allowDrop(model, component) {
      if (model.name === 'Node 2-2') {
        // 不允许被放置
        return false;
      }
      // 允许被放置  
      return true;
    },
    curNodeClicked(model, component) {
      // console.log('curNodeClicked', model, component);
    },
    dragHandler(model, component, e) {
      // console.log('dragHandler: ', model, component, e);
    },
    dragEnterHandler(model, component, e) {
      // console.log('dragEnterHandler: ', model, component, e);
    },
    dragLeaveHandler(model, component, e) {
      // console.log('dragLeaveHandler: ', model, component, e);
    },
    dragOverHandler(model, component, e) {
      // console.log('dragOverHandler: ', model, component, e);
    },
    dragEndHandler(model, component, e) {
      // console.log('dragEndHandler: ', model, component, e);
    },
    dropHandler(model, component, e) {
      // console.log('dropHandler: ', model, component, e);
    }
  }
}
</script>
