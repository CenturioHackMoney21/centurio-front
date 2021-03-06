import React, { BaseSyntheticEvent, ReactElement, useRef } from 'react'
import Image from 'next/image'
import ReactTooltip from 'react-tooltip'
import { Recommandations } from '../../api/models/cover'
import UnrecognizedAsset from '../../public/icons/unrecognized_asset.svg'
import ShadowButton from '../Button/ShadowButton'

const redirectOnNexus = (address: string) => {
  window.open(
    `https://app.nexusmutual.io/cover/buy/get-quote?address=${address}`,
    '_blank'
  );
}

export default function QuoteCard(props: Recommandations): ReactElement {
  const recommandation: Recommandations = props;

  return (
    <div className="relative w-full">
      <div className="absolute w-full h-full -right-1 -bottom-1 bg-secondaryShadow border border-secondary rounded-lg" />
      <div className="h-full p-7 relative rounded-lg bg-secondary">
        <div className="w-full flex flex-row">
          {/* <Image */}
          {/*  src={recommandation.cover.logoUrl} */}
          {/*  className="w-16 h-16 rounded-md" */}
          {/*  alt="token" */}
          {/* /> */}
          <div className="-mt-2 flex flex-col ml-3">
            <span className="font-bold text-2xl">
              {recommandation.cover.name}
            </span>
            <span>{recommandation.cover.type}</span>
            <span className="font-bold">Chain: </span>
          </div>
        </div>
        <div className="mt-3 px-8 w-full flex flex-row">
          <div className="w-full h-0.5 bg-base" />
        </div>
        <div className="mt-3 w-full flex flex-row">
          <span className="font-bold">Detected token: </span>
          {recommandation.reasoning.map((reason) => (
            <>
              <div
                onMouseEnter={() => {
                  const elem = document.querySelector(
                    `#assetImg${reason.token}`
                  );
                  if (elem !== null) {
                    ReactTooltip.show(elem);
                  }
                }}
                onMouseLeave={() => {
                  const elem = document.querySelector(
                    `#assetImg${reason.token}`
                  );
                  if (elem !== null) {
                    ReactTooltip.hide(elem);
                  }
                }}
              >
                {/* <img */}
                {/*  id={`assetImg${reason.token}`} */}
                {/*  data-tip={reason.token} */}
                {/*  src={reason.logoUrl} */}
                {/*  onError={(e: BaseSyntheticEvent) => { */}
                {/*    e.target.src = UnrecognizedAsset; */}
                {/*  }} */}
                {/*  className="ml-2 w-6 h-6 rounded-md" */}
                {/*  alt="assets" */}
                {/* /> */}
                <ReactTooltip />
              </div>
            </>
          ))}
        </div>
        <div className="mt-3 w-full flex flex-row">
          <span className="font-bold">Why this protocol appears ?</span>
        </div>
        <div className="w-full flex flex-row">
          {recommandation.cover.type === 'protocol' ? (
            <span>
              The listed assets are related to this protocol and can be covered
              by this protocol cover. Note that with this cover, only the
              protocol will be covered. Always check the specifics on Nexus
              Mutual.
            </span>
          ) : (
            <span>
              The listed assets are related to this protocol and can be covered
              by this yield cover. Note that this cover protects your assets
              vertically meaning that even if the assets is based on multiple
              protocols, you will still be covered. Always check the specifics
              on Nexus Mutual.
            </span>
          )}
        </div>
        <div className="mt-3 w-full flex flex-row justify-end">
          <div className="h-7 w-44">
            <ShadowButton
              label="See on Nexus Mutual"
              color="ternary"
              onClick={() => redirectOnNexus(recommandation.cover.address)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
