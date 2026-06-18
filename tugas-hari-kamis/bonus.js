function buatDailyReward() {
    let terakhirClaim = null;
    let totalClaim = 0;

    return {
        claimReward() {
            const sekarang = new Date();

            if (
                terakhirClaim &&
                sekarang.toDateString() === terakhirClaim.toDateString()
            ) {
                console.log("Reward sudah diklaim hari ini!");
                return;
            }

            totalClaim++;

            let reward = 100;

            // Bonus setiap claim ke-7
            if (totalClaim % 7 === 0) {
                reward += 500;
                console.log("Bonus mingguan +500 coin");
            }

            terakhirClaim = sekarang;

            console.log("Reward berhasil diklaim");
            console.log("Coin didapat:", reward);
            console.log(
                "Tanggal claim:",
                sekarang.toLocaleDateString("id-ID")
            );
        },

        tampilkanInfo() {
            console.log("Total Claim:", totalClaim);
            console.log(
                "Claim Terakhir:",
                terakhirClaim
                    ? terakhirClaim.toLocaleDateString("id-ID")
                    : "Belum pernah claim"
            );
        }
    };
}

const reward = buatDailyReward();

reward.claimReward();
reward.claimReward();

reward.tampilkanInfo();