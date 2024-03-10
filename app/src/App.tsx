import Button from 'components/atoms/Button';
import Input from 'components/atoms/InputWithText';
import Provider from 'provider';

function App() {
  return (
    <Provider>
      <div style={{ position: 'absolute', top: '30px', left: '30px' }}>
        <Input label="Name" type="email" required />
      </div>
    </Provider>
  );
}

export default App;
