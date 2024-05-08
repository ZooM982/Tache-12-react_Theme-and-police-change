import {Theme2Context} from './theme-context';

class ThemedButton {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = Theme2Context;

export default ThemedButton;