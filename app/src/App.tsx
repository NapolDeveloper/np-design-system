import Input from 'components/atoms/Input';
import Provider from 'provider';

function App() {
  return (
    <Provider>
      <div style={{ position: 'absolute', top: '30px', left: '30px' }}>
        <Input type="number" />
      </div>
    </Provider>
  );
}

export default App;
