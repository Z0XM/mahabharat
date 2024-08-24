import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ContentBox } from './content-box';

export default function Home() {
	return (
		<div className='p-4'>
			<ContentBox
				level={0}
				index={0}
				title={'Mahabharat'}
				content={
					<div>
						<ContentBox
							level={1}
							index={0}
							title={'Shantanu, the king of Hastinapura, '}
							content={
								<>
									<p>
										{`In his previous birth, there was a powerful king of the Ikshvaku dynasty named Mahabhisha. He
										possessed many virtuous qualities, and after performing a thousand Ashvamedha Yagnas and a hundred
										Rajasuya Yagnas (to qualify as emperor), he had attained heaven after his death. Once, he got an
										opportunity to visit the court of Brahma where all the Devas and the Ganga were also present. While
										the celestials were worshipping Brahma, a wind blew and displaced Ganga's clothes revealing her
										body. Everybody present there bent their heads except Mahabhisha who kept gazing at her. Upon seeing
										this act, Brahma lost his temper and cursed him to be born a mortal. Ganga who also relished the
										mortal act was cursed to be born as human and come back only after breaking Mahabhisha's heart.
										Mahabhisha then requested Brahma that he, Mahabhisha, be born as the son of Kuru king Pratipa and
										his wish was granted by Brahma.`}
									</p>
									<p>
										{`The Kuru king Pratipa was once meditating. At that time Ganga took the form of a beautiful woman,
										approached the king and sat on his right thigh. When he asked her what she wanted, Ganga requested
										him to become her husband. Pratipa however refused since he had taken a vow not to lust for anybody,
										and also that she had sat on his right thigh and according to traditions a man's right thigh was for
										his daughter or daughter-in-law while the left thigh was for his wife. He then proposed that she
										marry his son, to which she agreed.`}
									</p>
									<p>
										{`A child was born to Pratipa and his wife Sunanda in their old age. He was named Shantanu because
										when he was born his father had controlled his passions by ascetic penances. Pratipa then installed
										Shantanu as king of Hastinapura and retired into the woods to perform penances. Bahlika who was
										elder than Shantanu also gave permission to him for becoming the king of Hastinapura.`}
									</p>
								</>
							}
						/>
						<ContentBox
							level={1}
							index={1}
							title={'has a short-lived marriage with the goddess Ganga'}
							content={
								<>
									<p>
										{`Shantanu saw a beautiful woman on the banks of the river Ganga and asked her to marry him. She
										agreed but with one condition: that Shantanu would never ask any questions about her actions. They
										married and later she gave birth to a son. But she drowned the child. Shantanu could not ask her the
										reason, because of his promise, lest she would leave him. One by one, seven sons were born and
										drowned by Ganga.`}
									</p>
									<p>
										{`When Ganga was about to drown the eighth son, Shantanu, devastated, could not restrain himself and
										confronted her. Finally, Ganga explained to King Shantanu about Brahma's curse given to Mahabhisha
										and her. Then she told him that their eight children were Eight Vasu's who`}
										<ContentBox
											level={2}
											index={0}
											title={'were cursed by Vasishtha'}
											content={
												<p>
													{`The Vasus were cursed to a miserable life since for Devas, being born as a mortal on earth is
													pure suffering. They had requested Ganga to end their life when they incarnated on Earth.
													Vasus are attendant deities of Indra, and Vishnu. They are eight elemental gods representing
													aspects of nature. The name Vasu means 'Dweller' or 'Dwelling'. They are eight among the
													Thirty-three gods. They were cursed by Vasishta when he found out they took his beloved cow,
													Nandini and her calf. To overcome it, Vasishta told them to ask Ganga to be their birthmother,
													and to kill them immediately after being born. Thus, she performed her karma as a helper for
													those who seek salvation.`}
												</p>
											}
										/>
										{`However, when they pacified him, he limited his curse and told them that they would be freed from
										this curse upon their birth as humans. So she released the seven of them from human life by drowning
										them all. However, the Vasu Dyaus was cursed to live a long life and not to have a wife or have
										children. But the sage Vashishtha also gave a boon to him that he would be virtuous, conversant with
										all the holy scriptures and will be an obedient son to his father. Ganga said she would take him to
										train him properly for the King's throne and status. With these words, she disappeared along with
										the child while Shantanu was struck with grief thinking about spending the rest of his life without
										her.`}
									</p>
								</>
							}
						/>
						{'and has a son, Devavrata (later to be called Bhishma, a great warrior),'}
						<ContentBox
							level={1}
							index={2}
							title={'who becomes the heir apparent'}
							content={
								<>
									<p>
										{`Shantanu, filled with grief from the loss of his wife and son, began to practise Brahmacharya and
										ruled his kingdom extremely well. By merely adopting virtuous behaviour, Shantanu was easily able to
										conquer the entire world without lifting weapons. All the kings declared Shantanu as Emperor and his
										reign was a peaceful one. Shantanu gave up hunting and gained popularity from his subjects.`}
									</p>
									<p>
										{`One day, while walking along the banks of the Ganga, Shantanu saw that the river had become shallow.
										While searching for the cause of this phenomenon, he came across a handsome young boy who had
										checked the river's flow with his celestial weapon. The young boy was his son, however, he did not
										recognize him because he could see him only for a few moments after he was born. The boy recognized
										that he was his father; however, he did not reveal it to him. Instead he disappeared from his sight
										using his power of illusion. Shantanu upon seeing this wondered whether the boy was actually his son
										and called upon Ganga to show the boy to him. Ganga having thus appeared revealed to him that the
										boy was actually his son Devavrata and that he was taught the knowledge of the holy scriptures by
										the sage Vasishtha and the art of warfare by Parshurama. After revealing the truth about Devavrata
										she told Shantanu to take him to Hastinapura. Upon reaching the capital Shantanu crowned Devavrata
										as the heir-apparent to the throne.`}
									</p>
									<p>
										{`Although Shantanu was pained from his separation from Ganga, he was overjoyed upon receiving such an
										accomplished son. He performed seven Ashvamedha Yagnas on the banks of Yamuna with the help of
										Devavrata`}
									</p>
								</>
							}
						/>
						{'Four years later, when King Shantanu goes hunting, '}
						<ContentBox
							level={1}
							index={3}
							title={'he sees Satyavati and marries her.'}
							content={
								<>
									<p>
										{`Four years later, Shantanu while travelling near the banks of Yamuna smelled a sweet scent coming
										from an unknown direction. While searching for the cause of the scent, he came across Satyavati from
										whom the`}
										<ContentBox
											level={2}
											index={1}
											title={'smell of scent was coming.'}
											content={
												<>
													<p>
														{`During her early years, Satyavati was the daughter of a fisherman, belonging to a clan that
														used to ferry people across the river. She used to help her father in this task. One day,
														she helped Parashara to cross the river Yamuna. He was enchanted by her beauty and wanted an
														heir from her. Initially, Satyavati did not agree, saying that if others would see them,
														then her purity would be questioned. Parashara created a secret place in the bushes of a
														nearby island and a blanket of thick fog. She conceived and immediately gave birth to a son.
														Parashara named him Krishna Dvaipayana (Vyas), referring to his dark complexion and
														birthplace. Dvaipayana became an adult and promised his mother that he would come to her
														when needed. Parashara restored Satyavati's virginity, gifted her an enchanting smell and
														left with his son. Satyavati kept this incident a secret.`}
													</p>
												</>
											}
										/>
										{`Satyavati was an adopted daughter of the chief of the fishermen of her village. Upon seeing her,
										Shantanu fell in love with her and desired to marry her. Upon asking for his consent, her father
										agreed to the marriage on the condition that Satyavati's son would inherit the throne of
										Hastinapura.`}
									</p>
									<p>
										{`King Shantanu was unable to give his word on accession as his eldest son Devavrata was the heir to
										the throne and was forlorn. Devavrata, however, realised the cause of his sorrow and for the sake of
										his father, gave his word to the chief that he would renounce all his claims to the throne, in
										favour of Satyavati's children. To reassure the skeptical chief further, he also vowed lifelong
										celibacy to ensure that future generations borne of Satyavati would also not be challenged by his
										offspring. Upon hearing this vow he immediately agreed to the marriage of Satyavati and Shantanu.
										Devavrata was named as Bhishma (one who has taken a terrible vow) by the celestials because of the
										terrible oath he took.`}
									</p>
									<p>
										{`But eventually Shantanu knows about his son's vow. Upon hearing about this, Shantanu at first was
										heartbroken, but later became highly impressed with his son's love and affection and gave him a boon
										that he will only die if he wants to.`}
									</p>
									<p>
										{`Shantanu and Satyavati went on to have two sons, Chitrāngada and Vichitravirya. After Shantanu's
										death, Chitrangada became king of Hastinapur. He lives a very short uneventful life and dies.
										Vichitravirya, the younger son, rules Hastinapura. Both of them died early without leaving an heir,
										but Vichitravirya`}
										<ContentBox
											level={2}
											index={2}
											title={'had two wives - Ambika and Ambalika.'}
											content={
												<>
													<p>
														{`The King of Kāśī arranges a swayamvara for his three daughters, neglecting to invite the
														royal family of Hastinapur. To arrange the marriage of young Vichitravirya, Bhishma attends
														the swayamvara of the three princesses Amba, Ambika, and Ambalika, uninvited, and proceeds
														to abduct them. Ambika and Ambalika consent to be married to Vichitravirya.`}
													</p>
													<p>
														{`The oldest princess Amba, however, informs Bhishma that she wishes to marry the king of
														Shalva whom Bhishma defeated at their swayamvara. Bhishma lets her leave to marry the king
														of Shalva, but Shalva refuses to marry her, still smarting at his humiliation at the hands
														of Bhishma. Amba then returns to marry Bhishma but he refuses due to his vow of celibacy.
														Amba becomes enraged and becomes Bhishma's bitter enemy, holding him responsible for her
														plight. She vows to kill him in her next life. Later she is reborn to King Drupada as`}
														<ContentBox
															level={3}
															index={0}
															title={'Shikhandi (or Shikhandini)'}
															content={
																<>
																	<p>
																		{`Shiva appeared to grant her a boon of her choice, and she solicited the death of
																		Bhishma. Shiva told Amba that she would be born as a girl who would later become a
																		man in her next life, and become a maharathi who would slay Bhishma in battle.
																		Overjoyed, the princess lit a funeral pyre, prayed for the death of Bhishma, and
																		self-immolated. She was then reborn as Shikandi (sister of draupadi) who changed her
																		gender to become a man with a Yakshas named Stunakarna.`}
																	</p>
																</>
															}
														/>
														{`and causes Bhishma's fall, with the help of Arjuna, in the battle of Kurukshetra.`}
													</p>
												</>
											}
										/>
									</p>
								</>
							}
						/>
						<ContentBox
							level={1}
							index={4}
							title={"Satyavati's firstborn, Vyas fathers Dhritarashtra, Pandu and Vidura."}
							content={
								<>
									<p>
										{`A widowed Satyavati initially asked her stepson, Bhishma, to marry both the queens, but he refused,
										citing his vow of celibacy. Satyavati revealed her secret past and requested him to bring her
										firstborn to impregnate the widows under a tradition called Niyoga. By this time, Vyasa had compiled
										the Vedas.`}
									</p>
									<p>
										{`Sage Vyasa was unkempt because of months of meditation in the forest. Hence upon seeing him, Ambika
										who was rather scared shut her eyes, resulting in their child, Dhritarashtra, being born blind. The
										other queen, Ambalika, turned pale upon meeting Vyasa, which resulted in their child, Pandu, being
										born pale. Alarmed, Satyavati requested that Vyasa meet Ambika again and grant her another son.
										Ambika instead sent her maid to meet Vyasa. The duty-bound maid was calm and composed; she had a
										healthy child who was later named`}
										<ContentBox
											level={2}
											index={2}
											title={'Vidura'}
											content={
												<p>
													{`The rishi Mandavya cursed Yama that he would be born as a maid's son for getting him impaled
													without a valid reason. He was born in the mortal world as Vidura.`}
												</p>
											}
										/>
									</p>
								</>
							}
						/>
						<ContentBox
							level={1}
							index={5}
							title={'Pandu retires to forest with his wives and Dhritarashtra becomes king.'}
							content={
								<>
									<p>
										{`When the princes grow up, Dhritarashtra is about to be crowned king by Bhishma when Vidura
										intervenes and uses his knowledge of politics to assert that a blind person cannot be king. This is
										because a blind man cannot control and protect his subjects. The throne is then given to Pandu
										because of Dhritarashtra's blindness`}
									</p>
									<p>
										{`Pandu marries twice, to Kunti and Madri. Dhritarashtra marries`}
										<ContentBox
											level={2}
											index={3}
											title={'Gandhari'}
											content={
												<p>
													{`As a maiden, she is said to have impressed Shiva through penance and received a boon to bear a
													hundred children.`}
												</p>
											}
										/>
										{`, a princess from Gandhara, who blindfolds herself for the rest of her life so that she may feel the
										pain that her husband feels. Her brother Shakuni is enraged by this and vows to take revenge on the
										Kuru family.`}
									</p>
									<p>
										{`One day, when Pandu is relaxing in the forest, he hears the sound of a wild animal. He shoots an
										arrow in the direction of the sound. However, the arrow hits the sage Kindama, who was engaged in a
										sexual act in the guise of a deer. He curses Pandu that if he engages in a sexual act, he will die.
										Pandu then retires to the forest along with his two wives, and his brother Dhritarashtra rules
										thereafter, despite his blindness.`}
									</p>
								</>
							}
						/>
						<ContentBox
							level={1}
							index={6}
							title={'Wives of Pandu, Kunti & Madri give birth to Pandavas.'}
							content={
								<p>
									{`Pandu's older queen Kunti, however, had been given a boon by Sage Durvasa that she could invoke any
									god using a special mantra. Kunti uses this boon to ask Dharma, the god of justice, Vayu, the god of
									the wind, and Indra, the lord of the heavens for sons. She gives birth to three sons, Yudhishthira,
									Bhima, and Arjuna, through these gods. Kunti shares her mantra with the younger queen Madri, who bears
									the twins Nakula and Sahadeva through the Ashwini twins. However, Pandu and Madri indulge in
									lovemaking, and Pandu dies. Madri commits suicide out of remorse. Kunti raises the five brothers, who
									are from then on usually referred to as the Pandava brothers.`}
								</p>
							}
						/>
						<ContentBox
							level={1}
							index={7}
							title={'Dhritarashtra and Gandhari give birth to 100 Kauravas and Duhsala, their sister.'}
							content={
								<p>
									{`Dhritarashtra has`}
									<ContentBox
										level={2}
										index={4}
										title='hundred sons, '
										content={
											<p>
												{`When Gandhari's pregnancy continued for an unusually long period of time, Her mother-in-law
												Ambika and Ambalika were very upset with her. Pandu and Kunti earlier bore a son whom they named
												Yudhishthira. So she beat her womb in frustration. This caused a hardened mass of grey-coloured
												flesh to issue from her womb. She implored Vyasa, the great sage who had blessed her as "Shata
												Putra Praptirasthu" (Sanskrit for "blessed with a hundred sons"), to redeem his words. Vyasa
												divided the ball of flesh into one hundred and one equal pieces and put them in pots of milk,
												which were sealed and buried into the earth for two years. At the end of the second year, the
												first pot was opened, and Duryodhana emerged.`}
											</p>
										}
									/>
									{`and one daughter—Duhsala—through Gandhari, all born after the birth of Yudhishthira. These are the
									Kaurava brothers, the eldest being Duryodhana, and the second Dushasana. Other Kaurava brothers
									include Vikarna and Sukarna.`}
								</p>
							}
						/>
						<ContentBox
							level={1}
							index={8}
							title={'Dhritarashtra and Gandhari give birth to 100 Kauravas and Duhsala, their sister.'}
							content={
								<p>
									{`Dhritarashtra has`}
									<ContentBox
										level={2}
										index={4}
										title='hundred sons, '
										content={
											<p>
												{`When Gandhari's pregnancy continued for an unusually long period of time, Her mother-in-law
												Ambika and Ambalika were very upset with her. Pandu and Kunti earlier bore a son whom they named
												Yudhishthira. So she beat her womb in frustration. This caused a hardened mass of grey-coloured
												flesh to issue from her womb. She implored Vyasa, the great sage who had blessed her as "Shata
												Putra Praptirasthu" (Sanskrit for "blessed with a hundred sons"), to redeem his words. Vyasa
												divided the ball of flesh into one hundred and one equal pieces and put them in pots of milk,
												which were sealed and buried into the earth for two years. At the end of the second year, the
												first pot was opened, and Duryodhana emerged.`}
											</p>
										}
									/>
									{`and one daughter—Duhsala—through Gandhari, all born after the birth of Yudhishthira. These are the
									Kaurava brothers, the eldest being Duryodhana, and the second Dushasana. Other Kaurava brothers
									include Vikarna and Sukarna.`}
								</p>
							}
						/>
						<ContentBox
							level={1}
							index={9}
							title={'Kauravas plot to burn pandavas alive.'}
							content={
								<p>
									{`After the deaths of their mother (Madri) and father (Pandu), the Pandavas and their mother Kunti
									return to the palace of Hastinapur. Yudhishthira is made Crown Prince by Dhritarashtra, under
									considerable pressure from his courtiers. Dhritarashtra wanted his son Duryodhana to become king and
									lets his ambition get in the way of preserving justice.`}
									{`Shakuni, Duryodhana, and Dushasana plot to get rid of the Pandavas. Shakuni calls the architect
									Purochana to build a palace out of flammable materials like lac and ghee. He then arranges for the
									Pandavas and the Queen Mother Kunti to stay there, intending to set it alight. However, the Pandavas
									are warned by their wise uncle, Vidura, who sends them a miner to dig a tunnel. They escape to safety
									through the tunnel and go into hiding. During this time,`}
									<ContentBox
										level={2}
										index={5}
										title={'Bhima marries a demoness Hidimbi and has a son Ghatotkacha.'}
										content={
											<>
												<p>
													{`The story begins in the Lākṣāgṛha of the Mahābhārata after the Pāṇḍavās reached a dense
													forest. Exhausted from their travels, they all fell asleep at night, except for Bhīma, who
													kept watch.`}
												</p>
												<p>
													{`In the same forest lived Hiḍimbi and her brother Hiḍimbā, a very powerful rakshasa. He smelled
													the Pāṇḍavās at a distance and as usual asked Hiḍimbi to lure the well-built Bhīma into a trap
													so he could eat him. Hiḍimbi confronted Bhīma and instead fell in love with him. She assumed
													the form of a very beautiful lady and approached Bhīma, expressing her desire to marry him by
													revealing her true identity, as well as her brother's intentions. Bhīma confronted Hiḍimbā,
													and soon overpowered the rakshasa and`}
													<ContentBox
														level={3}
														index={1}
														title={'slew him. '}
														content={
															'Hidimba got furious at his sister and rushed towards her to kill her. Bhima interjected Hidimba and challenged him to fight him instead. The sleeping Pandavas woke up on hearing the sounds of them fighting and offered to help Bhima in killing Hidimba but Bhima asked them to watch the duel as spectators. Arjuna reminded Bhima that daybreak was about to set in and the demons become stronger at that time and Bhima should kill Hidimba as soon as possible. Bhima ended up crushing and tearing Hidimba into two pieces.'
														}
													/>
													{`Kuntī and other Pāṇḍavās all watched the duel from a distance.`}
												</p>
												<p>
													{`After killing Hiḍimba, Bhīma married Hiḍimbi. Bhīma decided to live with her till a child was
													born. Hiḍimbi agreed, and they married. Within a year, Hiḍimbi gave birth to a son. They named
													him Ghaṭotkacha, as his head resembled a pot. Ghaṭotkacha went on to become a great warrior
													and an important figure in the Mahābhārata war.`}
												</p>
											</>
										}
									/>
									{`Back in Hastinapur, the Pandavas and Kunti are presumed dead.`}
								</p>
							}
						/>
						<ContentBox
							level={1}
							index={10}
							title={'Pandavas marry Draupadi.'}
							content={
								<p>
									{`Whilst they were in hiding, the Pandavas learn of a swayamvara which is taking place for the hand of
									the Pāñcāla princess Draupadī. The Pandavas, disguised as Brahmins, come to witness the event.
									Meanwhile, Krishna, who has already befriended Draupadi, tells her to look out for Arjuna (though now
									believed to be dead). The task was to string a mighty steel bow and shoot a target on the ceiling,
									which was the eye of a moving artificial fish, while looking at its reflection in oil below. In
									popular versions, after all the princes fail, many being unable to lift the bow, Karna proceeds to the
									attempt but is interrupted by Draupadi who refuses to marry a suta. After this, the swayamvara is
									opened to the Brahmins leading Arjuna to win the contest and marry Draupadi. The Pandavas return home
									and inform their meditating mother that Arjuna has won a competition and to look at what they have
									brought back. Without looking, Kunti asks them to share whatever Arjuna has won amongst themselves,
									thinking it to be alms. Thus, Draupadi ends up being the wife of all five brothers.`}
								</p>
							}
						/>
						<ContentBox
							level={1}
							index={11}
							title={'Pandavas Rule Indraprastha.'}
							content={
								<>
									<p>
										{`After the wedding, the Pandava brothers are invited back to Hastinapura. The Kuru family elders and
										relatives negotiate and broker a split of the kingdom, with the Pandavas obtaining and demanding
										only a wild forest inhabited by Takshaka, the king of snakes, and his family. Through hard work, the
										Pandavas build a new glorious capital for the territory at Indraprastha.`}
									</p>
									<ContentBox
										level={2}
										index={6}
										title={"Shortly after this, Arjuna elopes with and then marries Krishna's sister, Subhadra."}
										content={`According to the Chaturdhara Recension of the Mahabharata, Arjuna was in the midst of self-imposed pilgrimage, for breaking terms of the agreement he had with his brothers regarding private time with their common wife Draupadi. After he reached the city of Dvaraka and met his maternal cousin Krishna, he attended a festival held at Raivata mountain. There Arjuna saw Subhadra and was smitten by her beauty and wished to marry her. Krishna revealed that she was Vasudeva's and Rohini's child, and his half-sister. Krishna stated that he could not predict Subhadra's decision at her svayamvara (groom selection ceremony) and advised Arjuna to elope with Subhadra. After receiving agreement to a letter sent to Yudhishthira for permission, Arjuna drove a chariot to the hills and took Subhadra with him. After Subhadra's guards unsuccessfully attempted to stop them, the Yadavas, the Vrishnis, and the Andhakas held a meeting to discuss the matter. After Krishna comforted them, they agreed, and thus, Arjuna married Subhadra with Vedic rituals.`}
									/>
									<p>
										{`Yudhishthira wishes to establish his position as king; he seeks Krishna's advice. Krishna advises
										him, and after due preparation and the elimination of some opposition, Yudhishthira carries out the
										rājasūya yagna ceremony; he is thus recognized as pre-eminent among kings.`}
									</p>
									<p>
										{`The Pandavas have a new palace built for them, by Maya the Danava. They invite their Kaurava
										cousins to Indraprastha. Duryodhana walks round the palace, and mistakes a glossy floor for water,
										and will not step in. After being told of his error, he then sees a pond and assumes it is not water
										and falls in. Bhima, Arjuna, the twins and the servants laugh at him. In popular adaptations,
										this insult is wrongly attributed to Draupadi, even though in the Sanskrit epic, it was the Pandavas
										(except Yudhishthira) who had insulted Duryodhana. Enraged by the insult, and jealous at seeing the
										wealth of the Pandavas, Duryodhana decides to host a dice-game on Shakuni's suggestion. This
										suggestion was accepted by Yudhisthira despite the rest of the Pandavas advising him not to play.`}
									</p>
								</>
							}
						/>
					</div>
				}
			/>
		</div>
	);
}
