import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Snippet } from '@ukhomeoffice/asl-components';
import { Button } from '@ukhomeoffice/react-components';

class ToggleASRU extends React.Component {

  renderAdd() {
    return <Fragment>
      <form action="" method="post">
        <input type="hidden" name="asruUser" value="true" />
        <p><Snippet>asru.notice</Snippet></p>
        <Button type="submit" className="button-secondary"><Snippet>asru.add</Snippet></Button>
      </form>
    </Fragment>;
  }

  renderRemove() {
    return <Fragment>
      <hr />
      <form action="" method="post">
        <input type="hidden" name="asruUser" value="false" />
        <Button type="submit" className="button-secondary"><Snippet>asru.remove</Snippet></Button>
      </form>
    </Fragment>;
  }

  render () {
    const model = this.props.model;

    return model.asruUser ? this.renderRemove() : this.renderAdd();
  }

}

const mapStateToProps = ({ model }) => ({ model });

export default connect(mapStateToProps)(ToggleASRU);
