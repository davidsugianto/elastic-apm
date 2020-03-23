import { init as initApm } from '@elastic/apm-rum'

const apm = initApm({
 serviceName: 'node-frontend',
//  serviceVersion: '0.1',
 serverUrl: 'http://apm-server:8200',
//  distributedTracingOrigins: ['http://backend:6200']
})

export default apm; 

// <script src="elastic-apm-rum.umd.min.js" crossorigin></script>
// <script>
//   elasticApm.init({
//     serviceName: '',
//     serverUrl: 'http://apm-server:8200',
//   })
// </script>
