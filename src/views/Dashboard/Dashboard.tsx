import React from 'react';
import QuoteCard from '../../components/QuoteCard';
import HttpRequest  from '../../api/api';

export default class Dashboard extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      componentList: []
    };
  }

  componentDidMount() {
    this.componentList();
  }



  componentList = () => { HttpRequest.getCover()
    .then(({ data }) => {
      this.setState({
        componentList: data.map((elem) => {
          const logo: string = 'https://app.nexusmutual.io/logos/' + elem.logo;
          return <QuoteCard name={elem.name} logo={logo} type={elem.type}/>
        })
      })
    })
    .catch(() => this.setState({componentList: []}))};

  render() {
    return (
      <main className="w-screen bg-primary h-screen overflow-auto">
        <div className="w-full flex justify-center my-20">
          <div className='flex flex-col'>
            <span className="text-secondary font-bold text-xl">COVERS RECOMMENDATIONS</span>
            <div className='mt-3 px-8 w-full flex flex-row'>
              <div className='w-full h-0.5 bg-secondary' />
            </div>
          </div>
        </div>
        <div className="w-full grid gap-x-32 gap-y-32 xl:grid-cols-2 2xl:grid-cols-3 px-20">
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {this.state.componentList}
        </div>
      </main>
    );
  }
}
