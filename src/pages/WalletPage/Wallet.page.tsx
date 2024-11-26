import React from "react";
import styles from "./WalletPage.module.scss";

interface Asset {
    id: string;
    name: string;
    value: string;
    change: string;
    color: string;
}

const WalletScreen: React.FC = () => {
    const assets: Asset[] = [
        { id: "1", name: "Tether", value: "9,856 USDT", change: "+1.4%", color: "#0d9151" },
        { id: "2", name: "TON", value: "0.72 USDT", change: "+5.7%", color: "#0d9151" },
        { id: "3", name: "Tether", value: "9,856 USDT", change: "+1.4%", color: "#0d9151" },
        { id: "4", name: "TON", value: "0.72 USDT", change: "+5.7%", color: "#0d9151" },
    ];

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <p className={styles.balanceLabel}>Общий баланс</p>
                <h1 className={styles.balance}>10,576$</h1>
                <p className={styles.balanceChange}>-5.48%</p>
            </div>

            {/* Action Buttons */}
            <div className={styles.actions}>
                <button className={styles.actionButton}>Отправить</button>
                <button className={styles.actionButton}>Пополнить</button>
                <button className={styles.actionButton}>Обменять</button>
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
                <p className={`${styles.tab} ${styles.activeTab}`}>Активы</p>
                <p className={styles.tab}>История</p>
            </div>

            {/* Asset List */}
            <div className={styles.assetList}>
                {assets.map((asset) => (
                    <div key={asset.id} className={styles.assetContainer}>
                        <div className={styles.assetDetails}>
                            <p className={styles.assetName}>{asset.name}</p>
                            <p className={styles.assetChange} style={{ color: asset.color }}>
                                {asset.change}
                            </p>
                        </div>
                        <p className={styles.assetValue}>{asset.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalletScreen;
