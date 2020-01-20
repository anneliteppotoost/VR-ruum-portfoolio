import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling },
    template: `
    <Layout>
        <Scene>
            <template v-slot:assets>
            <a-assets>
                
            </a-assets>
            </template>
        <!-- <Ceiling position="0 6 0"/> -->
        <a-entity material="color: white;emissive:yellow; emissiveIntensity: 2" class="chandelier" position="0 1 0" scale="0.023 0.023 0.023" obj-model="obj: #chandelier"></a-entity>
          <a-entity light="type: point; intensity: 0.5; color: #FFF; castShadow: true" position="0 3.8 0"></a-entity>
          <a-entity light="type: ambient; intensity: 0.5; color: #FFF"></a-entity>
          </Ceiling>
          <Wall position="5 0 0" rotation="0 -90 0" material="src: brick.jpg" />
          <a-plane
              position="4.9 3 0"
              scale="4 4 2"
              rotation="0 -90 0"
              material="src: ./assets/images/longakere.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <Wall position="0 0 5" rotation="0 -180 0" />
          <a-plane
          position="0 3 4.9"
              scale="8 4 2"
              rotation="0 -180 0"
              material="src: ./assets/images/pilt1.jpg"
          ></a-plane>
         
          
          <Wall position="-5 0 0" rotation="0 90 0"/>
          <a-plane
              position="-4.9 3 0"
              scale="8 4 2"
              rotation="0 90 0"
              material="src: ./assets/images/pilt2.png"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
      
          
         <Box position="1 0.5 1" scale="1 1 1" color="red" shadow="cast: true"/>
         <Box position="-0.4 0.5 0.3" scale="0.7 0.7 0.7" color="red" shadow="cast: true"/>
         <Box position="2.2 0.5 1.3" scale="0.6 0.6 0.6" color="red" shadow="cast: true"/>

        <a-entity environment="preset: goaland; color: red; playArea: 0.7; dressing: mushrooms; dressingAmount: 400; " ></a-entity>
         
       </Scene>
    </Layout>
`
})