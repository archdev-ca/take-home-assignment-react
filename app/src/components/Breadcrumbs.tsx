import { Link } from 'react-router-dom'
import { BreadcrumbItemInterface } from '../interfaces/common'
import { Fragment } from 'react'

type Props = {
    items: BreadcrumbItemInterface[]
}

const Breadcrumbs = ({ items }: Props) => {
    return (
        <div className="flex px-3 py-4">
            {items && items.length
                ? items.map((item: BreadcrumbItemInterface, i: number) => {
                      return (
                          <Fragment key={i}>
                              {i > 0 ? <span className="mx-2">&rsaquo;</span> : null}
                              {item.active ? (
                                  <span className="text-black-muted">{item.text}</span>
                              ) : (
                                  <Link to={item.link}>{item.text}</Link>
                              )}
                          </Fragment>
                      )
                  })
                : null}
        </div>
    )
}

export default Breadcrumbs
