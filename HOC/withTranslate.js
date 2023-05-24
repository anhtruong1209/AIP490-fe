import useTrans from '../hooks/useTrans';

function withTransHook(Component) {
    return function WrappedComponent(props) {
        const trans = useTrans();
      return <Component {...props} trans={trans} />;
    }
}

export default withTransHook