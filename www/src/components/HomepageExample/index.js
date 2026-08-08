import clsx from "clsx";
import Playground from "../Playground";

function HomepageExample() {
  return (
    <div className="container">
      <div className="row">
        <div
          className={clsx("col col--12")}
          style={{ margin: "3rem auto 1rem auto" }}>
          <div className="padding-horiz--md">
            <Playground>{`
              import { Alert, Prime } from "@promethey/bsui";

              export default function BasicAlert() {
                return (
                  <Alert tone="warning">
                    <Prime as="strong" d="block">Holy guacamole!</Prime>
                    You should check in on some of those fields below.
                  </Alert>
                );
              }
            `}</Playground>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageExample;
