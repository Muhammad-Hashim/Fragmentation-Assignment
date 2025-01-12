import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

interface Props {
  burnAmount: number;
  onChangeBurnAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  executeBurn: () => void;
  txProgress: boolean;
  txButton: string;
  burnTxHash: string | null;
  walletChain: any;
  tokenAddress: string;
  suppliesChain: any;
  statsSupplies: any;
  allSupplies: any[];
  chainTokenSymbols: Map<number, string>;
  openChainModal: () => void;
}


const numberWithCommas = (value: number): string => {
    // assume  function
  return 
};

const prettyEthAddress = (address: string): string => {
  // assume  function
  return 
};

const zeroAddress = "0x0000000000000000000000000000000000000000";

const BurnPage: React.FC<Props> = ({
  burnAmount,
  onChangeBurnAmount,
  executeBurn,
  txProgress,
  txButton,
  burnTxHash,
  walletChain,
  tokenAddress,
  suppliesChain,
  statsSupplies,
  allSupplies,
  chainTokenSymbols,
  openChainModal,
}) => {
  return (
    <DashboardLayoutStyled className="burnpage">
      <div
        className="top_conatiner burnpage"
        style={{ alignItems: "flex-start" }}
      >
        <div className="info_box filled">
          <h1 className="title">App TOKEN BURN</h1>
          <p className="description medium"></p>

          <BurnButtonBar>
            <p className="box_subheader">Burn your App</p>
            <div className="description medium">
              &quot; The process of reducing the supply of App tokens by
              permanently removing a certain number of them from circulation,
              often through a deliberate and recorded mechanism. &quot;
            </div>

            <div className="burn_bar">
              <div className="input_value_box">
                <p className="input_muted">Enter amount to Burn</p>
                <input
                  className="input_value"
                  type="text"
                  value={burnAmount}
                  placeholder="0.00"
                  onChange={onChangeBurnAmount}
                />
              </div>
              <Button
                variant="outlined"
                onClick={executeBurn}
                startIcon={
                  txProgress ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <AppIcon
                      url="/icons/fire.svg"
                      fill={IconFilter.primary}
                      size={1.5}
                      margin={0}
                    />
                  )
                }
              >
                <span>{txButton}</span>
              </Button>
            </div>
            {burnTxHash && (
              <div className="tx_links">
                <AppTooltip
                  title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}
                >
                  <AppExtLink
                    url={`${walletChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
                    className="header_link"
                  >
                    Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
                  </AppExtLink>
                </AppTooltip>
              </div>
            )}
          </BurnButtonBar>
        </div>
        <BurnStatsContainer>
          <div className="top_bar">
            <AppIcon
              url="/images/token/App_new.svg"
              size={2}
              margin={0}
              fill={IconFilter.unset}
            />
            <p className="label">App SUPPLY</p>
            <AppChip
              onClick={openChainModal}
              title={walletChain?.name || "---"}
              endIcon={"/icons/expand_more.svg"}
              startIcon={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
            ></AppChip>
            <AppExtLink
              className=" supply_label"
              url={`${suppliesChain?.blockExplorers?.default?.url}/address/${tokenAddress}`}
            >
              View Contract
            </AppExtLink>
          </div>
          <div className="supply_bar">
            <AppIcon
              url="/icons/fire.svg"
              size={1.15}
              margin={0}
              fill={IconFilter.primary}
            />
            <AppIcon
              url="/icons/double_arrow.svg"
              size={1.15}
              style={{
                margin: "0 0 0 -0.8rem",
              }}
              fill={IconFilter.primary}
            />
            <span
              className="line orange"
              style={{ width: `${100 - statsSupplies.circulatingPercent}%` }}
            ></span>
            <span
              className="line green"
              style={{ width: `${statsSupplies.circulatingPercent}%` }}
            ></span>
          </div>
          <div className="supply_label_list">
            <div>
              <p className="supply_label">
                <span className="hyphen orange"></span>
                <span className="text">Burnt App Tokens</span>
                <span className="percent orange">
                  {(100 - statsSupplies.circulatingPercent).toFixed(2)}%
                </span>
              </p>
              <p className="supply_value">
                <AppIcon
                  size={1.25}
                  url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
                  fill={IconFilter.unset}
                  margin={0}
                />
                {numberWithCommas(
                  statsSupplies.totalSupply - statsSupplies.circulatingSupply
                )}
              </p>
              <div className="full_supply">
                Original App Token Initial Supply:
                {numberWithCommas(statsSupplies.totalSupply)}
              </div>
            </div>
            <div>
              <p className="supply_label">
                <span className="hyphen green"></span>
                <span className="text">Circulating App Tokens</span>
                <span className="percent green">
                  {statsSupplies.circulatingPercent.toFixed(2)}%
                </span>
              </p>
              <p className="supply_value">
                <AppIcon
                  size={1.25}
                  url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
                  fill={IconFilter.unset}
                  margin={0}
                />
                {numberWithCommas(statsSupplies.circulatingSupply)}
              </p>
              {allSupplies
                .filter((s) => s.chainId != walletChain?.id)
                .map((s: any) => (
                  <p key={s.chainId} className="supply_value mini">
                    <AppIcon
                      size={1.25}
                      url={`/images/token/${
                        chainTokenSymbols.get(s.chainId) ?? "ETH"
                      }.svg`}
                      fill={IconFilter.unset}
                      margin={0}
                    />
                    {numberWithCommas(s.circulatingSupply)}
                  </p>
                ))}
            </div>
          </div>
        </BurnStatsContainer>
      </div>
    </DashboardLayoutStyled>
  );
};

export default BurnPage;
