import React, {useState} from "react"
import styles from "../../public/css/styles.module.css"
import pop from "../../public/css/popup.module.css"

const projects = React.forwardRef((props, ref) => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  return (
    <section ref={ref}>
      <h2>Projects</h2>
      <div className={styles.sectionProject}>
        <div className={styles.projectContainer}>
          <img src="./images/autocore.png" />
          <div className={styles.projectContent}>
            <h2 onClick={() => setShow1(true)}>
              <u>Terracore Automation Game</u>
            </h2>
            <p>
              <strong>
                <i>HTML, CSS, Javascript, Node js, Express.Js, Firebase, Vercel, Hive blockchain</i>
              </strong>
            </p>
            <ul>
              <li>
                <p>Implemented a user login page via Hive Keychain, enhancing user security.</p>
              </li>
              <li>
                <p>
                  Empowered users to manage multiple accounts for income tracking, store automated claims in Firebase, and implemented advanced
                  encryption for secure user key management.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={pop.popupContainer} style={{display: show1 ? "block" : "none"}} onClick={() => setShow1(false)}>
          <div className={pop.popupContent}>
            <h2>Terracore Automation Game</h2>
            <p>
              <a href="https://autocore-website.vercel.app/" target="_blank">
                <i>Click here to visit the website</i>
              </a>
            </p>
            <p>
              <strong>Implemented a user login page via Hive Keychain, enhancing user security:</strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>User Login Page:</strong> I developed a dedicated user login page as a vital component of the project. This page serves as
                  the entry point for users to access the application securely.
                </p>
              </li>
              <li>
                <p>
                  <strong>Hive Keychain Integration:</strong> To bolster user security, I integrated Hive Keychain. Hive Keychain is a trusted and
                  secure wallet and key management tool designed for the Hive blockchain. It provides users with a convenient and secure way to manage
                  their Hive accounts and associated keys.
                </p>
              </li>
              <li>
                <p>
                  <strong>Enhancing User Security:</strong> By leveraging Hive Keychain, I've significantly enhanced the security of the login
                  process. Users can now log in using their Hive accounts, knowing that their private keys and sensitive information are protected.
                  This enhancement minimizes the risk of unauthorized access and potential security breaches.
                </p>
              </li>
            </ul>

            <p>
              <strong>
                Empowered users to manage multiple accounts for income tracking, store automated claims in Firebase, and implemented advanced
                encryption for secure user key management:
              </strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>Managing Multiple Accounts:</strong> I've equipped users with the capability to manage multiple accounts within the
                  application. This functionality is particularly useful for users who need to track income from various sources or manage multiple
                  Hive accounts. It simplifies the account management process, providing users with a holistic overview of their financial activities.
                </p>
              </li>
              <li>
                <p>
                  <strong>Storing Automated Claims in Firebase:</strong> As part of my solution, I've implemented a feature that allows users to store
                  automated claims in Firebase. Firebase is a robust and scalable cloud-based database and backend service offered by Google. By using
                  Firebase, we ensure that users' claims and related data are securely stored, readily accessible, and easily synchronized across
                  devices and platforms.
                </p>
              </li>
              <li>
                <p>
                  <strong>Advanced Encryption for Secure User Key Management:</strong> To fortify user data security, I've implemented advanced
                  encryption mechanisms for the secure management of user keys. This includes encrypting and safeguarding user authentication and
                  authorization keys. By employing encryption, we mitigate the risk of unauthorized access to sensitive data, providing users with a
                  higher level of protection for their accounts and financial information.
                </p>
              </li>
            </ul>
            <button onClick={() => setShow1(false)}>Close</button>
          </div>
        </div>

        <div className={styles.projectContainer}>
          <img src="./images/hiveConnect.png" />
          <div className={styles.projectContent}>
            <h2 onClick={() => setShow2(true)}>
              <u>Website for Hive Blockchain Users</u>
            </h2>
            <p>
              <strong>
                <i>HTML, CSS, Javascript, Node js, Express.Js, Firebase, Vercel, Hive blockchain</i>
              </strong>
            </p>

            <ul>
              <li>
                <p>
                  Streamlined user interaction with the Hive blockchain, enabling transactions like token transfers, NFT and token issuance, staking,
                  and more.
                </p>
              </li>
              <li>
                <p>
                  Provided users with the ability to monitor wallet balances, both their own and those of others, for a comprehensive financial
                  overview.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={pop.popupContainer} style={{display: show2 ? "block" : "none"}} onClick={() => setShow2(false)}>
          <div className={pop.popupContent}>
            <h2>Website for Hive Blockchain Users</h2>
            <p>
              <a href="https://rhiaji-hive-connect.vercel.app/" target="_blank">
                <i>Click here to visit the website</i>
              </a>
            </p>
            <p>
              <strong>
                Streamlined user interaction with the Hive blockchain, enabling transactions like token transfers, NFT and token issuance, staking,
                and more:
              </strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>User Interaction with Hive Blockchain:</strong> The project focused on simplifying and enhancing how users engage with the
                  Hive blockchain. Hive is a decentralized blockchain platform that facilitates various types of transactions, including token
                  transfers, NFT (Non-Fungible Token) and token issuance, and staking.
                </p>
              </li>
              <li>
                <p>
                  <strong>Token Transfers:</strong> Users were empowered to send and receive cryptocurrency tokens efficiently. This functionality
                  allowed them to transact with Hive's native tokens and other digital assets.
                </p>
              </li>
              <li>
                <p>
                  <strong>NFT and Token Issuance:</strong> The project facilitated the creation and management of NFTs, which are unique digital
                  assets representing ownership of digital or physical items. Users could also issue their own tokens, providing them with the means
                  to create and manage their digital assets.
                </p>
              </li>
              <li>
                <p>
                  <strong>Staking:</strong> The project integrated staking, a process where users lock up their tokens to support network operations
                  and, in return, earn rewards. Staking is an essential feature for blockchain networks like Hive, and it was made accessible to
                  users.
                </p>
              </li>
              <li>
                <p>
                  <strong>Enhanced User Experience: </strong> By streamlining these blockchain interactions, the project aimed to provide a more
                  user-friendly and accessible experience. This reduced the complexity often associated with blockchain operations, making it easier
                  for users to participate in various financial activities on the Hive blockchain.
                </p>
              </li>
            </ul>

            <p>
              <strong>
                Provided users with the ability to monitor wallet balances, both their own and those of others, for a comprehensive financial
                overview:
              </strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>Wallet Balance Monitoring:</strong> The project implemented features that allowed users to monitor the balances of their
                  digital wallets. A digital wallet is a software application that stores various types of digital assets, including cryptocurrencies.
                  Users could keep track of their own wallet balances and those of other users.
                </p>
              </li>
              <li>
                <p>
                  <strong>Comprehensive Financial Overview:</strong> This functionality offered users a comprehensive view of their financial standing
                  within the blockchain ecosystem. Users could assess their holdings and the performance of their assets in real-time, enabling them
                  to make informed decisions regarding their investments, transactions, and financial strategies.
                </p>
              </li>
              <li>
                <p>
                  <strong>Transparency and Accountability:</strong> By providing the means to monitor not only their own wallet balances but also
                  those of other users, the project aimed to enhance transparency and accountability in the blockchain environment. Users could verify
                  the financial health of accounts they were interested in, reinforcing trust within the blockchain community.
                </p>
              </li>
            </ul>
            <button onClick={() => setShow2(false)}>Close</button>
          </div>
        </div>
        <div className={styles.projectContainer}>
          <img src="./images/tictactoe.png" />
          <div className={styles.projectContent}>
            <h2 onClick={() => setShow3(true)}>
              <u>Realtime Multiplayer Tic-Tac-Toe</u>
            </h2>
            <p>
              <strong>
                <i>HTML, CSS, Javascript, Node js, Express.Js, Firebase, Vercel</i>
              </strong>
            </p>
            <ul>
              <li>
                <p>Users have the capability to generate unique IDs for Firebase registration.</p>
              </li>
              <li>
                <p>
                  Users can create personalized lobbies for others to join and actively participate in various lobby interactions during the game.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={pop.popupContainer} style={{display: show3 ? "block" : "none"}} onClick={() => setShow3(false)}>
          <div className={pop.popupContent}>
            <h2>Realtime Multiplayer Tic-Tac-Toe</h2>
            <p>
              <a href="https://rhiaji-tictactoe.vercel.app/" target="_blank">
                <i>Click here to visit the website</i>
              </a>
            </p>

            <p>
              <strong>Users have the capability to generate unique IDs for Firebase registration:</strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>User Registration with Unique IDs:</strong> The project offers users the ability to create distinct and individual
                  identification codes, often referred to as Unique IDs, for their registration with Firebase. Firebase is a popular platform for
                  building web and mobile applications, and user registration is a fundamental component of most applications. By generating unique
                  IDs, each user's registration is associated with a one-of-a-kind identifier.
                </p>
              </li>
              <li>
                <p>
                  <strong>Enhancing User Identity:</strong> These unique IDs serve to enhance user identity and security. They help distinguish users
                  from one another and ensure that each user's data and interactions within the application are linked to their specific identifier.
                  This not only streamlines user management but also contributes to security by preventing data mix-ups and ensuring data privacy.
                </p>
              </li>
            </ul>

            <p>
              <strong>
                Users can create personalized lobbies for others to join and actively participate in various lobby interactions during the game:
              </strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>Personalized Lobbies:</strong> The project empowers users to create their own customized "lobbies." Lobbies are virtual
                  spaces where users can gather and engage with others, often within the context of multiplayer games or collaborative activities.
                  Personalized lobbies are tailored to the preferences and objectives of the user who creates them.
                </p>
              </li>
            </ul>
            <button onClick={() => setShow3(false)}>Close</button>
          </div>
        </div>
      </div>
    </section>
  )
})

export default projects
