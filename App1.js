import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useTransition } from 'transition-hook'
import './styles.css'

export default function App1() {
  const [onOff, setOnOff] = useState(false)
  const alertTrans = useTransition(onOff, 300)
  const buttonTrans = useTransition(!alertTrans.shouldMount, 300)

  return (
    <div className="App1" style={{ margin: '4vmin', position: 'relative' }}>
      {buttonTrans.shouldMount && (
        <Button
          size="lg"
          style={{
            transition: '.3s',
            opacity: buttonTrans.stage === 'enter' ? 1 : 0,
            transform:
              buttonTrans.stage === 'enter'
                ? 'translateY(0)'
                : 'translateY(50%)',
          }}
          onClick={() => setOnOff(true)}
        >
          Show Message
        </Button>
      )}

      {alertTrans.shouldMount && (
        <Alert
          variant="primary"
          style={{
            maxWidth: 550,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            margin: '0 auto',
            transition: '.3s',
            opacity: alertTrans.stage === 'enter' ? 1 : 0,
            filter: alertTrans.stage === 'enter' ? 'blur(0)' : 'blur(20px)',
            transform: alertTrans.stage === 'enter' ? 'scale(1)' : 'scale(.6)',
          }}
          onClose={() => setOnOff(false)}
          dismissible
        >
          <Alert.Heading>☄️ transition-hook!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
          <Button
            variant="link"
            as="a"
            href="https://codesandbox.io/s/transition-hook-example-tqgdj"
            target="_blank"
          >
            See Codes in Codesandbox
          </Button>
        </Alert>
      )}
    </div>
  )
}
