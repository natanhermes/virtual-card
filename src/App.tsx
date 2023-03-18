import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { client } from './lib/apollo';
import { Router } from './routes';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}
