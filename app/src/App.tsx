import Button from 'components/atoms/Button';
import Provider from 'provider';

function App() {
  return (
    <div>
      <Provider>
        <Button size="lg">lg</Button>
        <Button size="md">md</Button>
        <Button size="sm">sm</Button>
        <div></div>
        <Button size="lg" btnType="success">
          lg
        </Button>
        <Button size="md" btnType="success">
          md
        </Button>
        <Button size="sm" btnType="success">
          sm
        </Button>
        <div></div>
        <Button size="lg" btnType="error">
          lg
        </Button>
        <Button size="md" btnType="error">
          md
        </Button>
        <Button size="sm" btnType="error">
          sm
        </Button>
        <div></div>
        <Button size="lg" btnType="cancel">
          lg
        </Button>
        <Button size="md" btnType="cancel">
          md
        </Button>
        <Button size="sm" btnType="cancel">
          sm
        </Button>
      </Provider>
    </div>
  );
}

export default App;
